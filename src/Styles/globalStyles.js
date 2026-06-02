import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  locationButton: {
    fontSize: 24,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 5,
    marginBottom: 15,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  tabText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  errorContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  currentWeatherCard: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  currentWeatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherDescription: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  favoriteButton: {
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 24,
  },
  currentWeatherMain: {
    alignItems: 'center',
    marginBottom: 25,
  },
  weatherIcon: {
    fontSize: 80,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  weatherDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  weatherDetailItem: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  weatherDetailLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
  },
  weatherDetailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  sunTimes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sunTimeItem: {
    alignItems: 'center',
  },
  sunTimeIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  sunTimeLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 5,
  },
  sunTimeValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  forecastItem: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  forecastDate: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  forecastIcon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  forecastTemp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    width: 60,
    textAlign: 'center',
  },
  forecastDescription: {
    flex: 2,
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textTransform: 'capitalize',
  },
  forecastHumidity: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  favoriteCityItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  favoriteCityContent: {
    flex: 1,
  },
  favoriteCityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  favoriteCityCoords: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  deleteFavoriteButton: {
    padding: 10,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  apiWarning: {
    backgroundColor: 'rgba(255,0,0,0.8)',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  apiWarningText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  apiWarningSubtext: {
    color: '#fff',
    fontSize: 12,
  },
}); 