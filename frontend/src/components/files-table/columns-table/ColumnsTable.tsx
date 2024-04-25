import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ImageIcon from '@mui/icons-material/Image';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';
import { filesize } from 'filesize';
export const ColumnsTable: GridColDef[] = [
  {
    field: 'typeOfFile',
    headerName: 'Тип',
    width: 70,
    disableColumnMenu: true,
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
      return <InsertDriveFileIcon color="primary" />;
    },
  },
  {
    field: 'fileName',
    headerName: 'Имя',
    width: 450,
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
    // valueFormatter: param => {
    //   if (param.value === 0) return '';
    //   return filesize(Number(param.value), { standard: 'jedec' });
    // },
    valueFormatter: function (param: GridValueFormatterParams) {
      const size = param.value as number;
      return filesize(Number(size), { standard: 'jedec' });
    },
  },
];
