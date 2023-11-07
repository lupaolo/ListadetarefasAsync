import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FF00FF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
});

export default styles;
