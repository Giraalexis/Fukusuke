import Link from "next/link";

const Footer = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <div className="container-fluid">
      <Link href="/"><a className="navbar-brand">福助 Fukusuke</a></Link>
    </div>
  </nav>
);

export default Footer;