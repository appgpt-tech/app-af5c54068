//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const PlayerTitle = () => {
  const record = useRecordContext();
  return <span>Player {record ? `"${record.Name}"` : ''}</span>;
};

export const PlayerList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Name" />
      <NumberField source="Age" />
      <EmailField source="Email" />
      <TextField source="Username" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const PlayerEdit = () => (
  <Edit title={<PlayerTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Age" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Username" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const PlayerCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="Age" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Username" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
];
