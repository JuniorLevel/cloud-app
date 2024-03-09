import {
  GridRowParams,
  GridRowSelectionModel,
  GridValidRowModel,
  useGridApiRef,
} from '@mui/x-data-grid';
import { IFile } from 'interfaces/interfaces';
import { useEffect, useState } from 'react';
import useFileStore from 'store/file.store';

export function useFilesTableActions() {
  const files = useFileStore(state => state.files);
  const setCurrentDirectory = useFileStore(state => state.setCurrentDirectory);
  const currentDirectory = useFileStore(state => state.currentDirectory);
  const uploadFile = useFileStore(state => state.uploadFile);
  const pushToStack = useFileStore(state => state.pushToStack);
  const stackOfDirectories = useFileStore(state => state.stackOfDirectories);
  const downloadFile = useFileStore(state => state.downloadFile);
  const deleteFile = useFileStore(state => state.deleteFile);
  const [isSelectRow, setIsSelectRow] = useState(false);
  const [isSelectedDir, setIsSelectedDir] = useState(false);
  const [selectedRowsList, setSelectedRowsList] = useState<GridValidRowModel[]>(
    [],
  );
  let apiRef = useGridApiRef();

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    setPaginationModel(prev => ({ ...prev, page: 0 }));
  }, [files]);

  function changeDirectoryHandler() {
    stackOfDirectories.pop();
    !stackOfDirectories.length
      ? setCurrentDirectory(null)
      : setCurrentDirectory(
          String(stackOfDirectories[stackOfDirectories.length - 1]),
        );
  }

  function rowDoubleClickHandler(params: GridRowParams) {
    if (params.row.typeOfFile === 'dir') {
      if (params.id) {
        pushToStack(String(params.id));
      }
      setCurrentDirectory(String(params.id));
    }
  }

  function rowSelectionModeChangeHandler(newSelection: GridRowSelectionModel) {
    if (!newSelection.length) {
      setSelectedRowsList([]);
      setIsSelectRow(false);
    } else {
      setIsSelectRow(true);
      const selectedRows = Array.from(apiRef.current.getSelectedRows()).map(
        row => row[1],
      );
      setSelectedRowsList(selectedRows);
      if (selectedRows.some(row => row.typeOfFile === 'dir')) {
        setIsSelectedDir(true);
      } else {
        setIsSelectedDir(false);
      }
    }
  }

  function downloadFileClickHandler() {
    downloadFile(selectedRowsList as IFile[]);
    apiRef.current.setRowSelectionModel([]);
  }

  function deleteFileClickHandler() {
    deleteFile(selectedRowsList as IFile[]);
    apiRef.current.setRowSelectionModel([]);
  }

  return {
    files,
    isSelectRow,
    isSelectedDir,
    selectedRowsList,
    apiRef,
    paginationModel,
    setPaginationModel,
    changeDirectoryHandler,
    rowDoubleClickHandler,
    rowSelectionModeChangeHandler,
    downloadFileClickHandler,
    deleteFileClickHandler,
    currentDirectory,
    uploadFile,
  };
}
