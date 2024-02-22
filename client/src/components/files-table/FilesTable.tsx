import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ReplyIcon from '@mui/icons-material/Reply';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridRowSelectionModel,
  GridValidRowModel,
  useGridApiRef,
} from '@mui/x-data-grid';
import DragFilesArea from 'components/drag-files-area/DragFilesArea';
import ButtonAddFolder from 'components/ui/button-add-folder/ButtonAddFolder';
import ButtonUpload from 'components/ui/button-upload/ButtonUpload';
import { colors } from 'constants/colors';
import { filesize } from 'filesize';
import { IFile } from 'interfaces/interfaces';
import { DragEvent, FC, useEffect, useState } from 'react';
import useFileStore from 'store/file.store';

const FilesTable: FC = () => {
  const files = useFileStore(state => state.files);
  const setCurrentDirectory = useFileStore(state => state.setCurrentDirectory);
  const currentDirectory = useFileStore(state => state.currentDirectory);
  const uploadFile = useFileStore(state => state.uploadFile);
  const pushToStack = useFileStore(state => state.pushToStack);
  const stackOfDirectories = useFileStore(state => state.stackOfDirectories);
  const downloadFile = useFileStore(state => state.downloadFile);
  const [isDragFile, setIsDragFile] = useState(false);
  const [isSelectRow, setIsSelectRow] = useState(false);
  const [isSelectedDir, setIsSelectedDir] = useState(false);
  const [selectedRowsList, setSelectedRowsList] = useState<GridValidRowModel[]>(
    [],
  );
  const apiRef = useGridApiRef();

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  useEffect(() => {
    setPaginationModel(prev => ({ ...prev, page: 0 }));
    apiRef.current.setRowSelectionModel([]);
  }, [files]);

  const columns: GridColDef[] = [
    {
      field: 'typeOfFile',
      headerName: 'Тип',
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      renderCell: params => {
        if (params.row.typeOfFile === 'dir') {
          return <FolderOpenIcon color="primary" />;
        }
        if (
          params.row.typeOfFile === 'png' ||
          params.row.typeOfFile === 'jpeg' ||
          params.row.typeOfFile === 'jpg' ||
          params.row.typeOfFile === 'svg' ||
          params.row.typeOfFile === 'webp' ||
          params.row.typeOfFile === 'gif'
        ) {
          return <ImageIcon color="primary" />;
        }
        if (params.row.typeOfFile !== 'dir') {
          return <InsertDriveFileIcon color="primary" />;
        }
      },
    },
    {
      field: 'fileName',
      headerName: 'Имя',
      width: 500,
      disableColumnMenu: true,
    },
    {
      field: 'date',
      headerName: 'Дата создания',
      width: 250,
      disableColumnMenu: true,
      renderCell: params => params.row.date.slice(0, 10).replaceAll('-', '.'),
    },
    {
      field: 'sizeOfFile',
      headerName: 'Размер',
      width: 150,
      disableColumnMenu: true,
      valueFormatter: param => {
        if (param.value === 0) return '';
        return filesize(param.value, { standard: 'jedec' });
      },
    },
  ];

  function onDragEnterHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragFile(true);
  }

  function onDragLeaveHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragFile(false);
  }

  function onDropHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    files.forEach(file => uploadFile(file, currentDirectory));
    setIsDragFile(false);
  }

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

  function downloadFilesHandler() {
    downloadFile(selectedRowsList as IFile[]);
    apiRef.current.setRowSelectionModel([]);
  }

  return (
    <Box
      onDragEnter={onDragEnterHandler}
      onDragOver={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
      onDrop={onDropHandler}
      sx={{
        height: 630,
        width: '100%',
        '& .MuiDataGrid-cell:hover': {
          color: colors.primary,
          fontWeight: '500',
          cursor: 'pointer',
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: colors.whiteInput,
        },
      }}
    >
      <div className="flex gap-4 justify-end mb-2 relative">
        <ButtonAddFolder />
        <ButtonUpload />
        {currentDirectory && (
          <ReplyIcon
            onClick={changeDirectoryHandler}
            className="absolute top-[65px] left-[140px] z-50 rounded-round hover:cursor-pointer hover:bg-white"
            style={{ display: `${isDragFile ? 'none' : 'block'}` }}
            color="primary"
          />
        )}
        {isSelectRow && (
          <DeleteIcon className="absolute top-[65px] right-[25px] z-10 hover:cursor-pointer hover:text-primary" />
        )}
        {isSelectRow && !isSelectedDir && (
          <CloudDownloadIcon
            className="absolute top-[65px] right-[80px] z-10 hover:cursor-pointer hover:text-primary"
            onClick={downloadFilesHandler}
          />
        )}
      </div>
      {isDragFile ? (
        <DragFilesArea />
      ) : (
        <DataGrid
          apiRef={apiRef}
          onRowDoubleClick={rowDoubleClickHandler}
          localeText={{
            noRowsLabel: 'Создайте папку или перетащите файл',
          }}
          rows={files}
          columns={columns}
          getRowId={file => file._id}
          disableRowSelectionOnClick
          className="bg-[white]"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={rowSelectionModeChangeHandler}
        />
      )}
    </Box>
  );
};

export default FilesTable;
