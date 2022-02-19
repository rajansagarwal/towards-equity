import Airtable from 'airtable';
import Head from 'next/head';

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: process.env.API_KEY,
  });

  const records = await airtable
    .base(process.env.BASE_ID)('Towards')
    .select({
      fields: ['Name', 'Email'],
    })
    .all();

  const products = records.map((product) => {
    return {
      name: product.get('Name'),
      type: product.get('Email'),
    };
  });

  return {
    props: {
      products,
    },
  };
}

function Product({ name, email }) {
  return (
    <div className="item">
  <li>{name}</li>
    </div>
  );
}

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Towards Equity</title>


      </Head>
      <div className="wrapper"><br/><br/>
        <div className="home"><h1 className="page-heading">An open letter to remove Richard M. Stallman from all leadership positions</h1><p><em>Update (2021-04-12):</em> The Board of the Free Software Foundation has <a href="https://www.fsf.org/news/statement-of-fsf-board-on-election-of-richard-stallman">released a statement affirming their re-election of RMS</a>. We stand by our call to action in the letter below.</p>
        <div className="share-links">
  <p>Share</p>
  <a href="https://twitter.com/intent/tweet?text=I%20support%20this%20call%20for%20the%20entire%20Board%20of%20the%20FSF%20to%20step%20down%20and%20for%20Richard%20M.%20Stallman%20to%20be%20removed%20from%20all%20leadership%20positions.&amp;url=https://rms-open-letter.github.io/" target="_blank" rel="noopener noreferrer">
    <svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
      <title>Link to share on Twitter</title>
      <path fill="currentColor" d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"></path>
    </svg>
  </a>
  <a href="http://www.reddit.com/submit?title=I%20support%20this%20call%20for%20the%20entire%20Board%20of%20the%20FSF%20to%20step%20down%20and%20for%20Richard%20M.%20Stallman%20to%20be%20removed%20from%20all%20leadership%20positions.&amp;url=https://rms-open-letter.github.io/" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
      <title>Link to share on Reddit</title>
      <path fill="currentColor" d="M454 251.848C454 227.864 434.382 208.321 410.254 208.321C398.47 208.321 387.837 213.026 379.97 220.593C350.181 201.018 309.858 188.516 265.256 186.936L289.68 110.148L355.777 125.644L355.678 126.598C355.678 146.206 371.708 162.196 391.458 162.196C411.175 162.196 427.206 146.239 427.206 126.598C427.206 106.956 411.143 91 391.425 91C376.284 91 363.38 100.442 358.18 113.701L286.948 97.0207C283.854 96.264 280.661 98.0735 279.706 101.1L252.484 186.739C205.775 187.298 163.445 199.866 132.338 220.034C124.537 212.829 114.168 208.321 102.713 208.321C78.6183 208.354 59 227.864 59 251.848C59 267.805 67.7887 281.623 80.6921 289.222C79.8362 293.861 79.2767 298.533 79.2767 303.337C79.2437 367.656 158.408 420 255.677 420C352.979 420 432.11 367.656 432.11 303.337C432.11 298.829 431.617 294.388 430.86 290.012C444.553 282.643 454 268.397 454 251.848ZM170.522 281.721C170.522 267.443 182.207 255.796 196.559 255.796C210.91 255.796 222.563 267.41 222.563 281.721C222.563 296 210.877 307.614 196.559 307.614C182.207 307.646 170.522 296.033 170.522 281.721ZM319.634 358.543C306.533 371.571 285.927 377.921 256.697 377.921L256.467 377.888L256.237 377.921C227.007 377.921 206.401 371.571 193.3 358.543C190.897 356.174 190.897 352.292 193.3 349.923C195.67 347.554 199.587 347.554 201.957 349.923C212.655 360.55 230.397 365.748 256.237 365.748L256.467 365.781L256.697 365.748C282.504 365.748 300.279 360.583 310.977 349.923C313.38 347.554 317.231 347.554 319.634 349.923C322.037 352.292 322.037 356.174 319.634 358.543ZM316.54 307.646C302.188 307.646 290.536 296.033 290.536 281.754C290.536 267.476 302.221 255.829 316.54 255.829C330.892 255.829 342.544 267.443 342.544 281.754C342.544 296.033 330.892 307.646 316.54 307.646Z"></path>
    </svg>
  </a>
  <a href="https://www.facebook.com/sharer/sharer.php?u=https://rms-open-letter.github.io/" target="_blank" rel="noopener noreferrer">
    <title>Link to share on Facebook</title>
    <svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
      <path fill="currentColor" d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path>
    </svg>
  </a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://rms-open-letter.github.io/" target="_blank" rel="noopener noreferrer">
    <svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet" width="32" height="32">
      <title>Link to share on LinkedIn</title>
      <path fill="currentColor" d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
    </svg>
  </a>
</div>
<p><em>2021-03-23</em></p>

<p>Richard M. Stallman, frequently known as RMS, has been a dangerous force in the free software community for a long time. He has shown himself to be misogynist, ableist, and transphobic, among other serious accusations of impropriety. These sorts of beliefs have no place in the free software, digital rights, and tech communities. With his recent reinstatement to the Board of Directors of the Free Software Foundation, we call for the entire Board of the FSF to step down and for RMS to be removed from all leadership positions.</p>

<p>We, the undersigned, believe in the necessity of digital autonomy and the powerful role user freedom plays in protecting our fundamental human rights. In order to realize the promise of everything software freedom makes possible, there must be radical change within the community. We believe in a present and a future where all technology empowers – not oppresses – people. We know that this is only possible in a world where technology is built to pay respect to our rights at its most foundational levels. While these ideas have been popularized in some form by Richard M. Stallman, he does not speak for us. We do not condone his actions and opinions. We do not acknowledge his leadership or the leadership of the Free Software Foundation as it stands today.</p>

<p>There has been enough tolerance of RMS’s repugnant ideas and behavior. We cannot continue to let one person ruin the meaning of our work. Our communities have no space for people like Richard M. Stallman, and we will not continue suffering his behavior, giving him a leadership role, or otherwise holding him and his hurtful and dangerous ideology as acceptable.</p>

<p><strong>We are calling for the removal of the entire Board of the Free Software Foundation.</strong> These are people who have enabled and empowered RMS for years. They demonstrate this again by permitting him to rejoin the FSF Board. It is time for RMS to step back from the free software, tech ethics, digital rights, and tech communities, for he cannot provide the leadership we need. <strong>We are also calling for Richard M. Stallman to be removed from all leadership positions, including the GNU Project.</strong></p>

<p>We urge those in a position to do so to stop supporting the Free Software Foundation. Refuse to contribute to projects related to the FSF and RMS. Do not speak at or attend FSF events, or events that welcome RMS and his brand of intolerance. We ask for contributors to free software projects to take a stand against bigotry and hate within their projects. While doing these things, tell these communities and the FSF why.</p>

<p><a href="https://rms-open-letter.github.io/appendix">We have detailed several public incidents of RMS’s behavior</a>. Some of us have our own stories about RMS and our interactions with him, things that are not captured in email threads or on video. We hope you will read what has been shared and consider the harm that he has done to our community and others.</p>

<p>We seek a path towards equity</p>


<h3 id="individuals">Sign this petition.</h3>

<form action="https://getform.io/f/2fc831df-0eb4-4705-b41e-57ee5c39a563" method="POST" acceptCharset="UTF-8">
    <input type="text" name="name" placeholder="Your Name*" required="required"/><br/>
    <input type="email" name="email" placeholder="Your Email*" required="required"/><br/>
    <button type="submit">Submit</button>
</form>

<br/>
</div>
      <div>
        <p><small>this may take 30 seconds to update.</small></p>
        <ol>
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            type={product.email}
          />    
        ))}
        </ol>
      </div>
    </div>
    </div>
  );
}


