import { UndirectedWeightedGraph } from "graphijs";
import { useState } from "react";
import Header from "./Header";

const g = new UndirectedWeightedGraph();

g.addNode("MG Bus Station");
g.addLink("MG Bus Station", "Sultan Bazaar", 0.7);
g.addLink("Sultan Bazaar", "Narayanaguda", 1.3);
g.addLink("Narayanaguda", "Chikkadpally", 0.9);
g.addLink("Chikkadpally", "RTC X Roads", 0.8);
g.addLink("RTC X Roads", "Musheerabad", 1.2);
g.addLink("Musheerabad", "Gandhi Hospital", 0.9);
g.addLink("Gandhi Hospital", "Secunderabad West", 1.2);
g.addLink("Secunderabad West", "JBS Parade Ground", 1.3);
g.addLink("MG Bus Station", "Osmania Medical College", 0.6);
g.addLink("Osmania Medical College", "Gandhi Bhavan", 1.0);
g.addLink("Gandhi Bhavan", "Nampally", 0.8);
g.addLink("Nampally", "Assembly", 0.7);
g.addLink("Assembly", "Lakdi-ka-pul", 1.0);
g.addLink("Lakdi-ka-pul", "Khairatabad", 1.1);
g.addLink("Khairatabad", "Irrum Manzil", 1.2);
g.addLink("Irrum Manzil", "Punjagutta", 1.0);
g.addLink("Punjagutta", "Ameerpet", 1.1);
g.addLink("Ameerpet", "S.R Nagar", 0.7);
g.addLink("S.R Nagar", "ESI Hospital", 0.7);
g.addLink("ESI Hospital", "Erragadda", 1.2);
g.addLink("Erragadda", "Bharat Nagar", 0.8);
g.addLink("Bharat Nagar", "Moosapet", 1.0);
g.addLink("Moosapet", "Balanagar", 0.7);
g.addLink("Balanagar", "Kukatpally", 1.4);
g.addLink("Kukatpally", "K.P.H.B. Colony", 1.5);
g.addLink("K.P.H.B. Colony", "J.N.T.U College", 1.5);
g.addLink("J.N.T.U College", "Miyapur", 1.8);
g.addLink("MG Bus Station", "Malakpet", 0.9);
g.addLink("Malakpet", "New Market", 1.1);
g.addLink("New Market", "Musarambagh", 1.0);
g.addLink("Musarambagh", "Dilsukhnagar", 1.5);
g.addLink("Dilsukhnagar", "Chaitanyapuri", 1.1);
g.addLink("Chaitanyapuri", "Victoria Memorial", 1.2);
g.addLink("Victoria Memorial", "L.B. Nagar", 1.4);
g.addLink("JBS Parade Ground", "Parade Ground", 0);
g.addLink("Parade Ground", "Secunderabad East", 1.6);
g.addLink("Secunderabad East", "Mettuguda", 1.9);
g.addLink("Mettuguda", "Tarnaka", 1.3);
g.addLink("Tarnaka", "Habsiguda", 1.6);
g.addLink("Habsiguda", "NGRI", 0.9);
g.addLink("NGRI", "Stadium", 1.2);
g.addLink("Stadium", "Uppal", 1.1);
g.addLink("Uppal", "Nagole", 1.0);
g.addLink("Parade Ground", "Paradise", 1.2);
g.addLink("Paradise", "Rasoolpura", 1.0);
g.addLink("Rasoolpura", "Prakash Nagar", 1.1);
g.addLink("Prakash Nagar", "Begumpet", 1.4);
g.addLink("Begumpet", "Ameerpet", 1.6);
g.addLink("Ameerpet", "Madhura Nagar", 0.7);
g.addLink("Madhura Nagar", "Yousufguda", 1.4);
g.addLink("Yousufguda", "Jubilee Hills Road No. 5", 0.9);
g.addLink("Jubilee Hills Road No. 5", "Jubilee Hills Check Post", 0.6);
g.addLink("Jubilee Hills Check Post", "Peddamma Gudi", 0.9);
g.addLink("Peddamma Gudi", "Madhapur", 1.5);
g.addLink("Madhapur", "Durgam Cheruvu", 1.7);
g.addLink("Durgam Cheruvu", "HITEC City", 0.8);
g.addLink("HITEC City", "Raidurg", 1.5);
g.setMainNode("MG Bus Station");
g.setMainNode("JBS Parade Ground");
g.setMainNode("Ameerpet");
g.setMainNode("L.B. Nagar");
g.setMainNode("Nagole");
g.setMainNode("Miyapur");
g.setMainNode("Raidurg");

function LandingPage() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const nodes = g.nodes();
  console.log(nodes);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { path: curPath, distance: curDistance } = g.dijkstra(
      fromStation,
      toStation
    );
    setPath(curPath);
    setDistance(curDistance);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <Header className="relative" />
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://etimg.etb2bimg.com/photo/101490797.cms')] bg-cover bg-center filter blur-sm"></div>
        <div className="relative max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Metro Minimize
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-800 text-lg font-medium mb-2">
                From station
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={fromStation}
                onChange={(e) => setFromStation(e.target.value)}
              >
                <option value="">Select station</option>
                {nodes.map((node, index) => (
                  <option key={index} value={node}>
                    {node}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-800 text-lg font-medium mb-2">
                To station
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={toStation}
                onChange={(e) => setToStation(e.target.value)}
              >
                <option value="">Select station</option>
                {nodes.map((node, index) => (
                  <option key={index} value={node}>
                    {node}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {isFormSubmitted && path && (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://etimg.etb2bimg.com/photo/101490797.cms')] bg-cover bg-center filter blur-sm"></div>
          <div className="relative max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-300 z-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
              Shortest Path from {fromStation} to {toStation}
            </h2>
            <ul className="mb-4">
              {path.map((station, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="mr-2">{index + 1}.</span>
                  <li className="list-none">{station}</li>
                </div>
              ))}
            </ul>
            <p className="text-lg font-medium">Total Distance: {distance} km</p>
          </div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
