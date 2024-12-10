
const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <img 
        src="https://i.ibb.co.com/CwrFcyS/Best-Coming-Soon-and-404-Error-Page-Templates-for-Your-Unique-Websites.jpg" 
        alt="404 Error" 
        style={styles.image} 
      />
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={styles.link}>Go back to Home</a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '70%',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '4rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
  link: {
    marginTop: '20px',
    display: 'inline-block',
    fontSize: '1rem',
    color: '#007BFF',
    textDecoration: 'none',
    border: '1px solid #007BFF',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default ErrorPage;
