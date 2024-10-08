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
const MembersTitle = () => {
  const record = useRecordContext();
  return <span>Members {record ? `"${record.Name}"` : ''}</span>;
};

export const MembersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="Name" />
      <EmailField source="Email" />
      <TextField source="Address" />
      <TextField source="PhoneNumber" />
      <DateField source="DateOfBirth" />
      <TextField source="MembershipStatus" />
      <DateField source="JoiningDate" />
      <TextField source="MembershipType" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const MembersEdit = () => (
  <Edit title={<MembersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Address" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PhoneNumber" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="MembershipStatus" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="JoiningDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="MembershipType" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const MembersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="Name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Email" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Address" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="PhoneNumber" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="DateOfBirth" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="MembershipStatus" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="JoiningDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="MembershipType" />
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
  ,
  ,
  ,
  ,
];
