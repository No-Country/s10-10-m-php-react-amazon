import { CardProfile } from "../components/CardProfile";

const PersonProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <h1 className="text-sizeTitle font-bold mt-5">Mi perfil</h1>
      <CardProfile user={user} />
    </div>
  );
};

export default PersonProfile;
