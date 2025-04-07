import { NextResponse, type NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    
    const apiKey = process.env.NEBIUS_API_KEY;
    if (!apiKey) { 
      console.error('Nebius API key is missing or not configured in .env.local');
      return NextResponse.json({ error: 'API key not configured on server' }, { status: 500 });
    }

    
    const nebiusApiEndpoint = 'https://api.studio.nebius.com/v1/images/generations';
    const requestPayload = {
      model: "stability-ai/sdxl", 
      prompt: prompt,
      response_format: "b64_json", 
      
      extra_body: {
        width: 512, 
        height: 512, 
        num_inference_steps: 30, 
        seed: -1, 
        response_extension: "webp", 
        
      }
    };
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    console.log(`Sending request to Nebius API at ${nebiusApiEndpoint} with prompt: "${prompt}"`);

    const response = await axios.post(nebiusApiEndpoint, requestPayload, { headers });


    const imageData = response.data?.data?.[0]?.b64_json;

    if (imageData) {
      
      console.log("Successfully received image data from Nebius API.");
      return NextResponse.json({ image_base64: imageData });
    } else {
      console.error('Failed to extract image data (b64_json) from Nebius API response:', response.data);
      return NextResponse.json({ error: 'Failed to get image data from API response' }, { status: 500 });
    }

  } catch (error: unknown) {
    console.error('Error in /api/generate:', error);

    
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.response?.data || error.message);
      return NextResponse.json(
        { error: `API request failed: ${error.response?.data?.message || error.message}` },
        { status: error.response?.status || 500 }
      );
    }

    
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


