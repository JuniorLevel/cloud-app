import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AnimationWrapper from 'components/ui/animation-wrapper/AnimationWrapper';
import ButtonAddFolder from 'components/ui/button-add-folder/ButtonAddFolder';
import ButtonUpload from 'components/ui/button-upload/ButtonUpload';
import { colors } from 'constants/colors';
import { DragEvent, FC, useEffect, useState } from 'react';
import { ColumnsTable } from './columns-table/ColumnsTable.tsx';
import { useFilesTableActions } from './useFilesTableActions.ts';
const FilesTable: FC = () => {
  const {
    isSelectRow,
    isSelectedDir,
    files,
    setPaginationModel,
    apiRef,
    paginationModel,
    changeDirectoryHandler,
    rowDoubleClickHandler,
    rowSelectionModeChangeHandler,
    downloadFileClickHandler,
    deleteFileClickHandler,
    currentDirectory,
    uploadFile,
  } = useFilesTableActions();

  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    setIsDrag(false);
  }, [files]);

  function onDragEnterHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(true);
  }

  function onDragLeaveHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(false);
  }

  function onDropHandler(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const files = [...e.dataTransfer.files];
    files.forEach(file => uploadFile(file, currentDirectory));
  }

  return (
    <AnimationWrapper>
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
              className="absolute top-[70px] left-[190px] z-50 rounded-round hover:cursor-pointer hover:bg-white block"
              color="primary"
            />
          )}
          {isSelectRow && (
            <DeleteIcon
              className="absolute top-[70px] right-[25px] z-10 hover:cursor-pointer hover:text-primary sm:left-[270px] md:left-[270px] lg:left-[270px]"
              onClick={deleteFileClickHandler}
            />
          )}
          {isSelectRow && !isSelectedDir && (
            <CloudDownloadIcon
              className="absolute top-[70px] right-[80px] z-10 hover:cursor-pointer hover:text-primary sm:left-[230px] md:left-[230px] lg:left-[230px]"
              onClick={downloadFileClickHandler}
            />
          )}
        </div>
        <DataGrid
          apiRef={apiRef}
          onRowDoubleClick={rowDoubleClickHandler}
          localeText={{
            noRowsLabel: 'Создайте папку или перетащите файл',
          }}
          rows={files}
          columns={ColumnsTable}
          getRowId={file => file._id}
          disableRowSelectionOnClick
          className="bg-white"
          sx={{
            '& .MuiDataGrid-virtualScrollerContent': {
              border: `${isDrag ? '2px dashed black' : ''}`,
            },
          }}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={rowSelectionModeChangeHandler}
        />
      </Box>
    </AnimationWrapper>
  );
};

export default FilesTable;
