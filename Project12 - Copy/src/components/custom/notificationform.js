import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";

const notificationsData = [
  {
    id: 1,
    title: "🛒 Flash Sale Alert! Your favorite brand is offering huge Eid discounts.",
    store: "UNIWORTH",
    type: "Sale",
    date: "Mar 4",
    image: "/uniworth.png",
  },
  {
    id: 2,
    title: "🎉 Eid Mega Sale is Live! Get up to 50% OFF",
    store: "ZARA",
    type: "New sale",
    date: "Feb 22",
    image: "/zara.webp",
  },
  {
    id: 3,
    title: "🌙 Eid Sale Extravaganza! Enjoy store-wide discounts. Limited time only!",
    store: "Bacha-Party",
    type: "Sale",
    date: "Mar 3",
    image: "/bachaparty.png",
  },
  {
    id: 4,
    title: "🌙 Ramadan Kareem! Enjoy up to 70% OFF on your favorite brand.",
    store: "ENGINE",
    type: "New sale",
    date: "Feb 24",
    image: "/engine.png",
  },
  {
    id: 5,
    title: "🛍️ Blessed Deals for a Blessed Month! Special discounts today ✨🕌",
    store: "RAASTA",
    type: "Deal",
    date: "Feb 24",
    image: "/raasta.png",
  },
  {
    id: 6,
    title: "💫 Ramadan Flash Sale! Get up to 60% OFF. Hurry, before the deals disappear! ⏳🔥",
    store: "BEEINE",
    type: "New Deal",
    date: "Feb 24",
    image: "/bee.png",
  },
  {
    id: 7,
    title: "🌙 Eid is Near! Finish your Ramadan shopping with up to 50% OFF 🏷️✨",
    store: "Minnie Minors",
    type: "Announcement",
    date: "Feb 15",
    image: "/minnie-minors.png",
  },
  {
    id: 8,
    title: "🌙✨ Ramadan Blessings, Big Savings! Enjoy exclusive discounts.🛍️🎁",
    store: "Waleed",
    type: "New sale",
    date: "Feb 10",
    image: "/B.png",
  },
  {
    id: 9,
    title: "Overdue: Create list of UI components",
    store: "Basecamp",
    type: "DesignDrops",
    date: "Feb 9",
    image: "/bee.png",
  },
];

const CustomNotifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [allRead, setAllRead] = useState(false);

  const markAllRead = () => {
    setAllRead(true);
  };

  return (
    <div className="w-300 mx-auto p-4 ml-20 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Bell size={20} /> Notifications
        </h2>
        <button
          onClick={markAllRead}
          className="text-blue-500 hover:underline text-sm"
        >
          Mark All Read
        </button>
      </div>

      {/* Notifications List */}
      <div className="grid gap-5">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 border rounded-lg flex items-center gap-3 ${
              allRead ? "bg-gray-100 opacity-60" : "bg-white"
            }`}
          >
            {/* Notification Icon */}
            <img
              src={notification.image}
              alt="Notification"
              className="w-10 h-10 rounded-full"
            />

            {/* Notification Content */}
            <div className="flex-1 ">
              <p className="font-medium">{notification.title}</p>
              <span className="text-gray-500 text-sm">
                {notification.store} · {notification.type} · {notification.date}
              </span>
            </div>

            {/* Read Status Icon */}
            {!allRead && <CheckCircle size={18} className="text-green-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomNotifications;
