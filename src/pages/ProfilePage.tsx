import { Link } from "react-router";
import { mockProfiles } from "../data/mockProfiles";

function ProfilePage() {
    return (
        <>
            <p className="text-center text-4xl font-bold">
                This is profile page
            </p>
            <div className="flex flex-col gap-3 p-6">
                {mockProfiles.map((profile) => (
                    <div key={profile.id} className="flex items-center gap-4">
                        <span>{profile.name} - {profile.role}</span>
                        <Link to={`/profile/${profile.id}`} className="btn btn-primary btn-sm">
                            View detail
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProfilePage;