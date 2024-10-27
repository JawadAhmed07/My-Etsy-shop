import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Logo</div>
      <nav style={styles.nav}>
        <Link href="/"><a style={styles.link}>Home</a></Link>
        <Link href="/about"><a style={styles.link}>About</a></Link>
        <Link href="/contact"><a style={styles.link}>Contact</a></Link>
        <Link href="/products"><a style={styles.link}>Products</a></Link>
      </nav>
      <div style={styles.modeToggle} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e7e7e7',
  },
  logo: {
    flex: 1,
  },
  nav: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#333',
  },
  modeToggle: {
    flex: 1,
    textAlign: 'right',
    cursor: 'pointer',
  },
};

export default Header;
