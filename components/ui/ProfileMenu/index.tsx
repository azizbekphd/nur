import { Fragment } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import styles from "./ProfileMenu.module.css";
import useI18n from "../../../i18n";
import { CleanButton } from "..";

type ProfileMenuProps = {}

const ProfileMenu = ({}: ProfileMenuProps) => {
  const { data: session, status } = useSession();
  const { S } = useI18n();
  
  return (
    <div className={ styles.wrapper } tabIndex={1}>
      <div className={ styles.buttonWrapper }>
        <Image
          src={ session!.user!.image! }
          alt={ session!.user!.name! }
          width={40} height={40}
          className={ styles.profileImage }
          />
        <h4 className={ styles.name }>
          { session!.user!.name!.split(" ").map(
            (w,i,a)=><Fragment key={i.toString()}>
              <span>
                {w}
              </span>
              {i === a.length - 1 ? "" : " "}
            </Fragment>
          ) }
        </h4>
      </div>
      <ul className={ styles.menuItems }>
        <li>
          <CleanButton onClick={ ()=>signOut() }>
            { S.signOut }
          </CleanButton>
        </li>
      </ul>
    </div>
  )
}

export default ProfileMenu
