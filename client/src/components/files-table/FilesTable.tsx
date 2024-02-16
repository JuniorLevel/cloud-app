import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ReplyIcon from '@mui/icons-material/Reply';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ButtonAddFolder from 'components/ui/button-add-folder/ButtonAddFolder';
import ButtonUpload from 'components/ui/button-upload/ButtonUpload';
import { colors } from 'constants/colors';
import { FC } from 'react';
import useFileStore from 'store/file.store';
const FilesTable: FC = () => {
  const files = useFileStore(state => state.files);
  const setCurrentDirectory = useFileStore(state => state.setCurrentDirectory);
  const currentDirectory = useFileStore(state => state.currentDirectory);
  const pushToStack = useFileStore(state => state.pushToStack);
  const stackOfDirectories = useFileStore(state => state.stackOfDirectories);
  const columns: GridColDef[] = [
    {
      field: 'typeOfFile',
      headerName: 'Type',
      width: 150,
      disableColumnMenu: true,
      sortable: false,
      renderCell: params => {
        return params.row.typeOfFile === 'dir' ? (
          <FolderOpenIcon color="primary" />
        ) : (
          <InsertDriveFileIcon color="primary" />
        );
      },
    },
    {
      field: 'fileName',
      headerName: 'Name',
      width: 500,
      disableColumnMenu: true,
    },
    {
      field: 'date',
      headerName: 'Data Created',
      width: 250,
      disableColumnMenu: true,
      renderCell: params => params.row.date.slice(0, 10).replaceAll('-', '.'),
    },
    {
      field: 'sizeOfFile',
      headerName: 'Size',
      width: 150,
      disableColumnMenu: true,
    },
  ];
  return (
    <Box
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
            onClick={() => {
              stackOfDirectories.pop();
              !stackOfDirectories.length
                ? setCurrentDirectory(null)
                : setCurrentDirectory(
                    String(stackOfDirectories[stackOfDirectories.length - 1]),
                  );
            }}
            className="absolute top-[65px] left-[140px] z-50 rounded-round hover:cursor-pointer hover:bg-white"
            color="primary"
          />
        )}
      </div>
      <DataGrid
        onRowClick={params => {
          if (params.row.typeOfFile === 'dir') {
            if (params.id) {
              pushToStack(String(params.id));
            }
            setCurrentDirectory(String(params.id));
          }
        }}
        rows={files}
        columns={columns}
        getRowId={file => file._id}
        disableRowSelectionOnClick
        className="bg-[white]"
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
};

export default FilesTable;
