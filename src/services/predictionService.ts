export async function getPrediction(data: number[]): Promise<string> {
    const response = await fetch('https://literate-space-rotary-phone-5pvr5xv749ghpgvx-8000.app.github.dev/diagnosis/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to get prediction');
    }
  
    const result = await response.json();
    return result.diagnosis;
  }