import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";

function StartingLoadingScreen() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-screen preloader z-100"
          style={{ backgroundColor: "#1e6091" }}
        >
          <PropagateLoader
            size={15}
            color="#83c341"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-screen h-screen transition-transform duration-500 ease-in-out transform -translate-y-full preloader "
          style={{ backgroundColor: "#1e6091" }}
        >
          <PropagateLoader
            size={15}
            color="#83c341"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
}

export default StartingLoadingScreen;
