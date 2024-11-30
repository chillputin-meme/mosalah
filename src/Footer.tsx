const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} $MOSALAH. All Rights Reserved.
      </p>
      <p className="footer-tagline">
        <strong>Disclaimer: </strong>
        This memecoin is created pureli for entertainment purposes. It holds no
        inherent value and is not inteded for investment, financial, or
        speculative use. Always exercace cautin and make informed decisions when
        engaging with digital assets. Have fun responsibly!
      </p>
    </footer>
  );
};

export default Footer;
