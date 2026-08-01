export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured in Vercel environments.' });
    }
    
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;
        
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Forward the exact payload sent by the frontend
            body: JSON.stringify(req.body)
        });
        
        if (!response.ok) {
            const errData = await response.text();
            throw new Error(`Gemini API Error: ${errData}`);
        }
        
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Serverless Function Error:", error);
        return res.status(500).json({ error: 'Failed to communicate with AI provider.' });
    }
}
