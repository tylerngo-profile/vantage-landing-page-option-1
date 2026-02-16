const Footer = () => {
  return (
    <footer className="border-t bg-background py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <img
          src="/images/vantage-logo-dark.svg"
          alt="Vantage"
          className="h-6 w-auto"
        />
        <p className="text-xs text-muted-foreground">
          Built by Profile. © {new Date().getFullYear()} All rights reserved.
        </p>
        <nav className="flex gap-6">
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
