function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link) => (
        <a href={`#${link}`} key={link}>
          {link}
        </a>
      ))}
    </nav>
  );
}
