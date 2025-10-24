function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black text-blue-200 py-10 px-8 border-t border-blue-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <h2 className="text-2xl font-bold text-blue-300">Asharib Hashmi</h2>
        <div className="flex space-x-6">
          <a
            href="mailto:asharibhashmi7@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/A5harib"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asharib-hashmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 text-center text-blue-400 text-sm border-t border-blue-800 pt-6">
        <p>
          © {new Date().getFullYear()} Asharib Hashmi. All rights reserved.
          Built with
          <span className="text-blue-300"> React</span> &{" "}
          <span className="text-blue-300">Tailwind</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
