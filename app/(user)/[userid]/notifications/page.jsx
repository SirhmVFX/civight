import NotificationComponent from "@/components/NotificationsComponent";
import ProfileHeader from "@/components/Profileheader";

function Notifications() {
  return (
    <>
      <section className="w-full h-screen p-8">
        <ProfileHeader />

        <div className="py-4">
          <h1>Notifications</h1>
        </div>

        <NotificationComponent />
      </section>
    </>
  );
}

export default Notifications;
