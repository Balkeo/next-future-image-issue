const GlobalStyles = () => (
  <style jsx global>{`
    html,
    body {
      margin: 0;
      padding: 0;
    }

    html,
    body,
    #__next,
    #__next > div {
      margin: 0;
      padding: 0;
      height: 100%;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
);

const ApplicationKernel = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <>
      <GlobalStyles /> 
      {children}
    </>
  );
};

export default ApplicationKernel;
