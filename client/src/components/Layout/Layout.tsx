import styles from './Layout.module.css';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={styles.main}>
      <AntLayout.Content>
        <Outlet />
      </AntLayout.Content>
    </div>
  );
};
