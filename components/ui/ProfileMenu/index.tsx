import { Fragment } from "react";
import Image from "next/image";
import styles from "./ProfileMenu.module.css";
import useI18n from "../../../i18n";
import { CleanButton } from "..";
import { useAuthSession } from "../../../hooks";

type ProfileMenuProps = {};

const ProfileMenu = ({}: ProfileMenuProps) => {
  const { session } = useAuthSession();
  const { S } = useI18n();

  return (
    <div className={styles.wrapper} tabIndex={1}>
      <div className={styles.buttonWrapper}>
        {session?.user?.user_metadata.image ? (
          <Image
            src={session!.user!.user_metadata.image!}
            alt={session!.user!.user_metadata.name!}
            width={40}
            height={40}
            className={styles.profileImage}
          />
        ) : (
          <></>
        )}
        <h4 className={styles.name}>
          {(session!.user!.user_metadata.name! as string)
            .split(" ")
            .map((w, i, a) => (
              <Fragment key={i.toString()}>
                <span>{w}</span>
                {i === a.length - 1 ? "" : " "}
              </Fragment>
            ))}
        </h4>
      </div>
      <ul className={styles.menuItems}>
        <li>
          <CleanButton
            onClick={() => {
              // signOut()
            }}
          >
            {S.signOut}
          </CleanButton>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
