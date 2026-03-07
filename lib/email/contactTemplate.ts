export function contactEmailTemplate(
  name: string,
  email: string,
  message: string
) {
  const date = new Date().toISOString();
  return `
  <div style="background:#0f172a;padding:40px;font-family:monospace;color:#c0caf5">
    
    <h2 style="color:#9e68ff;margin-bottom:20px">
      New Contact Message
    </h2>

    <div style="
      background:#1f1f2e;
      border:1px solid #33467C;
      border-radius:8px;
      padding:20px;
      font-size:14px;
      line-height:1.6
    ">
<pre style="margin:0">

<span style="color:#7aa2f7">export const</span> contactMessage = {
  name: "<span style="color:#9ece6a">${name}</span>",
  email: "<span style="color:#9ece6a">${email}</span>",
  message: "<span style="color:#9ece6a">${message}</span>",
  date: "<span style="color:#e0af68">${date}</span>",
}

</pre>
    </div>

    <p style="margin-top:25px;color:#565f89">
      Sent from the contact form on 
      <a href="https://francocaballero.dev" style="color:#7aa2f7;text-decoration:none;">
        francocaballero.dev
      </a>
    </p>

  </div>
  `;
}