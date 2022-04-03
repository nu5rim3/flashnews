import { StyleSheet } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {
    padding: 10,
  },
  cardView: {
    margin: 25,
    borderRadius: 15,
    height: 450,
    backgroundColor: '#00000080',
    resizeMode: 'cover',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'flex-end'
  },
  cardDetailView: {
    backgroundColor: '#00000090',
    padding: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 10
  },
  cardAuthornData: {
    color: '#ffffff',
    fontSize: 20
  },
  detailScrollView: {
    backgroundColor: '#ffffff'
  },
  detailContainer: {
    // height: 700,
    padding: 15
  },
  detailImage: {
    width: '100%',
    height: 250
  },
  detailTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  detailSub: {
    fontSize: 20,
    fontWeight: '600',
    color: '#00000070'
  },
  detailSub2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00000090'
  },
  detailDescription: {
    fontWeight: '400',
    marginBottom: 20
  },
  detailMoreButton: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
  },
  detailMoreButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: '600'
  },
  zoomButton: {
    position: 'absolute',
    bottom: 30,
    left: 320,
    borderRadius: 25,
    backgroundColor: '#00000080',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // search 
  SearchContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  SearchView: {
    height: '10%',
    margin: 10,
    paddingLeft: 15,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    position: 'relative'
  },
  searchInputText: {
    fontSize: 18
  },
  searchButton: {
    position: 'absolute',
    right: 10
  },

  // error & empty
  errorContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});