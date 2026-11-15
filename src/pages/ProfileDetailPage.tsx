import { useParams } from "react-router";
import { mockProfiles } from "../data/mockProfiles";

function ProfileDetailPage() {
    const { id } = useParams<{ id: string }>();
    const profile = mockProfiles.find((item) => item.id === id);

    if (!profile) {
        return <p>Profile not found</p>;
    }
    return (
        <div>
            <h1>{profile.name}</h1>
            <p>ID: {profile.id}</p>
            <p>Role: {profile.role}</p>
        </div>
    );
}

export default ProfileDetailPage;