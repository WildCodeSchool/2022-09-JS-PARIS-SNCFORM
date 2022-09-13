import React from 'react';
import {IconLink} from "../../components/IconLink/IconLink";
import { NavLink } from 'react-router-dom';

export const MenuPage: React.FC = () => {

return(
<div className='menu-page'>
    <IconLink title="Formations" iconAlt='Icon de Formations' icon="src\assets\images\iconFormation.jpg" iconUrl=''/>
    <IconLink title="Profil" iconAlt='Icon de Profil' icon="src\assets\images\iconProfil.jpg" iconUrl=''/>
    <IconLink title="Notifications" iconAlt='Icon de Notifications' icon="src\assets\images\iconNotif.png" iconUrl=''/>
</div>
)

};