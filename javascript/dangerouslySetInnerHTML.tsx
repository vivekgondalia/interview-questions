const App = () => {
  //html string
  const data = "<h1 style='color: red;'>Some useful content</h1>";

  return (
    //Use case : Amazon - Sponsored content from 3rd party is received in above string format
    //exposes us to Cross Site Scripting(XSS) Attack
    <div dangerouslySetInnerHTML={{ __html: data }} />
  );
};
