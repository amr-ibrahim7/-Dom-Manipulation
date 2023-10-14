import { useState } from "react";

function App() {
  const [places, setPlaces] = useState([
    { id: 1, place: "left", checked: false },
    { id: 2, place: "left", checked: false },
    { id: 3, place: "left", checked: false },
    { id: 4, place: "right", checked: false },
    { id: 5, place: "right", checked: false },
    { id: 6, place: "right", checked: false },
  ]);

  const handleToLeft = () => {
    const updatedplaces = places.map((e) => {
      if (e.checked && e.place === "right") {
        return {
          ...e,
          place: "left",
          checked: false,
        };
      }
      return e;
    });
    setPlaces(updatedplaces);
  };
  const handleToRight = () => {
    const updatedplaces = places.map((e) => {
      if (e.checked && e.place === "left") {
        return {
          ...e,
          place: "right",
          checked: false,
        };
      }
      return e;
    });
    setPlaces(updatedplaces);
  };

  return (
    <main>
      <div className="flex w-screen items-center justify-center gap-4">
        <div className="border rounded-lg border-purple-400 p-5">
          {places?.map((_, i) => {
            return (
              <div key={i}>
                {places[i]?.place === "left" && (
                  <>
                    <input
                      type="checkbox"
                      id={`c-${places[i].id}`}
                      onChange={(e) => {
                        places[i].checked = e.target.checked;
                      }}
                    />
                    <label htmlFor={`c-${places[i].id}`}>
                      Check {`${i + 1}`}
                    </label>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="border rounded-lg border-purple-400 p-5">
          {places?.map((_, i) => {
            return (
              <div key={i}>
                {places[i]?.place === "right" && (
                  <>
                    <input
                      type="checkbox"
                      id={`c-${places[i].id}`}
                      onChange={(e) => {
                        places[i].checked = e.target.checked;
                      }}
                    />
                    <label htmlFor={`c-${places[i].id}`}>
                      Check {`${i + 1}`}
                    </label>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex w-screen justify-center mt-5 gap-3">
        <button onClick={() => handleToLeft()}>Move To Left</button>
        <button onClick={() => handleToRight()}>Move To Right</button>
      </div>
    </main>
  );
}
export default App;
