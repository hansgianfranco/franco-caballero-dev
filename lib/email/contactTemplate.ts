export function contactEmailTemplate(
  name: string,
  email: string,
  message: string
) {
  const date = new Date().toISOString();
  return `
  <div style="background:#0b0b0f;padding:40px;font-family:monospace;color:#e6e9ff">
    
    <h2 style="color:#7c5cff;margin-bottom:20px">
      New Contact Message
    </h2>

    <div style="
      background:#12121a;
      border:1px solid #2a2f45;
      border-radius:8px;
      padding:20px;
      font-size:14px;
      line-height:1.6
    ">
<pre style="margin:0">

<span style="color:#4cc9f0">export const</span> contactMessage = {
  name: "<span style="color:#00e5a8">${name}</span>",
  email: "<span style="color:#00e5a8">${email}</span>",
  message: "<span style="color:#00e5a8">${message}</span>",
  date: "<span style="color:#ff5c7c">${date}</span>",
}

</pre>
    </div>

    <p style="margin-top:25px;color:#8b8fa7">
      Sent from the contact form on 
      <a href="https://francocaballero.dev" style="color:#4cc9f0;text-decoration:none;">
        francocaballero.dev
      </a>
    </p>

  </div>
  `;
}