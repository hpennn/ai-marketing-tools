import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const body = await request.json();
    const { prompt, system_prompt } = body;

    if (!prompt) {
      return new Response(JSON.stringify({ error: '缺少prompt参数' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = (locals as any).runtime?.env?.ARK_API_KEY || import.meta.env.ARK_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API Key未配置' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const messages: any[] = [];
    if (system_prompt) {
      messages.push({ role: 'system', content: system_prompt });
    }
    messages.push({ role: 'user', content: prompt });

    const response = await fetch('https://ark.cn-beijing.volces.com/api/v3/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'ep-20260707225043-z7nkm',
        messages,
        temperature: 0.8,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({ error: 'API调用失败', detail: errText }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '生成失败，请重试';

    return new Response(JSON.stringify({ content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: '服务器错误', detail: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
