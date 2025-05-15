import { Button } from "../ui/button";
import KhaadiPost from "./khaadipost";
// import SearchBar from "./searchbar";

// import KhaadiPost from "./components/cus/KhaadiPost";

const UpdatesSidebar = () => {
  const updates = [
    { brand: "BachaParty", text: "New Collections Drop", img: "/bachaparty.png", link:"https://bachaaparty.com/collections/sale" },
    { brand: "Engine", text: "New Collections Drop", img: "/engine.png", link:"https://engine.com.pk/" },
    { brand: "Bareeze", text: "New Collections Drop", img: "/Breeze.jpeg", link:"https://www.bareeze.com/sale" },
    { brand: "Zara ", text: "New Collections Drop", img: "/zara.webp", link:"https://www.zara.com/ww/en/woman-special-prices-l1314.html?v1=2419737" },
    { brand: "Rastah", text: "New Collections Drop", img: "/raasta.png", link:"https://pk.rastah.co/?srsltid=AfmBOooHBrwEBCTRtF9Lw0AmiS_nJziWOSZMVtXrCRdbREDddWF7zLYQ&shpxid=daa87d24-e03a-4277-814e-b796620cd0e7" },
    { brand: "Nishat", text: "New Collections Drop", img: "/nishat.png", link:"https://nishatlinen.com/collections/new-in-all" },
    { brand: "Sana Safinaz", text: "New Collections Drop", img: "/sana.png", link:"https://www.sanasafinaz.com/pk/sale.html" },
    { brand: "Khaadi", text: "New Collections Drop", img: "/KhaadiLogo-22.png", link:"https://pk.khaadi.com/sale/" },
    { brand: "Nishat", text: "New Collections Drop", img: "/nishat.png", link:"https://nishatlinen.com/collections/new-in-all" },
    { brand: "Sana Safinaz", text: "New Collections Drop", img: "/sana.png", link:"https://www.sanasafinaz.com/pk/sale.html" },
    { brand: "Khaadi", text: "New Collections Drop", img: "/KhaadiLogo-22.png", link:"https://pk.khaadi.com/sale/" },
  ];

  return (
    <div>
     
      <div className="fixed top-0 right-0 h-full shadow-lg p-4 rounded-lg z-50 overflow-y-auto">
        {/* Profile Section */}
        <div className="flex items-center space-x-3 mb-4 mr-52">
          <img src="/userprofile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <a href="./userProfile" className="text-black-500 font-bold">its_waleed.x</a>
            <p className="text-gray-500 text-sm">Waleed</p>
          </div>
        </div>

        {/* Updates Header */}
        <div className="flex items-center justify-between whitespace-nowrap">
          <h2 className="font-bold">New Updates</h2>
          <a href="./storesvisit" className="text-blue-500 text-sm">See All</a>
        </div>

        {/* Updates List */}
        {updates.map((update, index) => (
          <div key={index} className="border-b py-3 flex items-center justify-evenly">
            {/* Brand Row (Logo, Name, and Button in One Line) */}
            
              <div className="flex  items-center space-x-5">
                <img src={update.img} alt={update.brand} className="w-8 h-8 rounded-full" />
                  <div className="flex items-center gap-40">
                    <div>
                      <p className="font-medium text-justify  ">{update.brand}</p>
                        {/* Update Text (Below the Row) */}
                      <p className="text-gray-500 text-sm mt-1 ">{update.text}</p>
                  
                      {/* Button aligned on the right */}
                      
                    </div>
                    <a
                      href={update.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-gray-300 to-gray-400 shadow-lg  text-white px-5 py-1 rounded-md  ">
                          Visit Now
                      </Button>
                    </a>
                  </div>
              </div>
            
    
          </div>

        ))}

        
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center gap-52 p-6 bg-white min-h-screen ">
      {/* Main Khaadi Post Component */}
      <KhaadiPost />

      {/* Updates Sidebar */}
      <UpdatesSidebar />
    </div>
  );
};

export default App;
