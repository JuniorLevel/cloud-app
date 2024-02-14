import Container from 'components/container/Container';
import FilesTable from 'components/files-table/FilesTable';
import ContentText from 'components/ui/content-text/ContentText';
import CreateFolderPopup from 'components/ui/create-folder-popup/CreateFolderPopup';
import Title from 'components/ui/title/Title';
import { FC, useEffect } from 'react';
import useFileStore from 'store/file.store';
import styles from './FilesSection.module.scss';
const FilesSection: FC = () => {
  const getFiles = useFileStore(state => state.getFiles);
  const currentDirectory = useFileStore(state => state.currentDirectory);

  useEffect(() => {
    getFiles(currentDirectory);
  }, [currentDirectory]);

  return (
    <section className={styles.filesSection}>
      <Container width={1200}>
        <Title text="My Files" />
        <ContentText />
        <FilesTable />
        <CreateFolderPopup />
      </Container>
    </section>
  );
};

export default FilesSection;
