import Navbar from './components/Nav/Navbar';
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />

      <section className='hero'>
        <div className='container '>
          <div className='text-wrapper w-full '>
            <h1 className='title'>Contact</h1>
            <p className='description'>
              ☕ Wanna chat? 👉 contact me on andriyantorifki@gmail.com
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='footer'>
              Development using Next js made with ❤️ in Jakarta
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
