import { useOthers, useSelf } from "@liveblocks/react/suspense";
import styles from "./Avatars.module.css";
import { useState } from "react";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();
  const [isPresent, setIsPresent] = useState<boolean>(false);

  // console.log(currentUser);
//   for (let user of users) {
//   if (user.id === currentUser.id) {
//     console.log(`Found user with id ${user.id}`);
//     setIsPresent(true);
//     break;
//   }
// }

  return (
    <div className={styles.avatars}>
      {users.map(({ connectionId, info }) => {
        return (
          <Avatar key={connectionId} picture={info.picture} name={info.name} />
        );
      })}

      {currentUser && (
        <div className="relative ml-8 first:ml-0">
          <Avatar
            picture={currentUser.info.picture}
            name={currentUser.info.name}
          />
        </div>
      )}
    </div>
  );
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.avatar} data-tooltip={name}>
      <img
        alt={name}
        src={picture}
        className={styles.avatar_picture}
        data-tooltip={name}
      />
    </div>
  );
}

