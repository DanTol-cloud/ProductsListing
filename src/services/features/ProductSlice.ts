import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from '../../types';

interface ProductState {
  products: ProductInterface[];
  filteredProducts: ProductInterface[];
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  sortOrder: 'asc' | 'desc';
  categories: string[];
  selectedCategory: string;
  priceRange: [number, number];
  selectedPriceRange: [number, number];
  searchQuery: string;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  currentPage: 1,
  itemsPerPage: 10,
  totalPages: 0,
  sortOrder: 'asc',
  categories: [],
  selectedCategory: 'All',
  priceRange: [0, 0],
  selectedPriceRange: [0, 0],
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductInterface[]>) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      // Extract categories from products
      // @ts-ignore
      state.categories = [
        'All',
        ...new Set(action.payload.map((p) => p.category)),
      ];
      // Determine price range
      const prices = action.payload.map((p) => p.price);
      state.priceRange = [Math.min(...prices), Math.max(...prices)];
      state.selectedPriceRange = state.priceRange;
      // Calculate total pages
      state.totalPages = Math.ceil(action.payload.length / state.itemsPerPage);
    },
    sortProducts(state, action: PayloadAction<'asc' | 'desc'>) {
      state.filteredProducts.sort((a, b) => {
        if (action.payload === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      state.sortOrder = action.payload;
    },
    filterByCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
      state.currentPage = 1;
      state.filteredProducts = state.products.filter(
        (product) =>
          (action.payload === 'All' || product.category === action.payload) &&
          product.price >= state.selectedPriceRange[0] &&
          product.price <= state.selectedPriceRange[1] &&
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      state.totalPages = Math.ceil(
        state.filteredProducts.length / state.itemsPerPage
      );
    },
    filterByPriceRange(state, action: PayloadAction<[number, number]>) {
      state.selectedPriceRange = action.payload;
      state.currentPage = 1;
      state.filteredProducts = state.products.filter(
        (product) =>
          (state.selectedCategory === 'All' ||
            product.category === state.selectedCategory) &&
          product.price >= action.payload[0] &&
          product.price <= action.payload[1] &&
          product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      state.totalPages = Math.ceil(
        state.filteredProducts.length / state.itemsPerPage
      );
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
      state.filteredProducts = state.products.filter(
        (product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase()) &&
          product.price >= state.selectedPriceRange[0] &&
          product.price <= state.selectedPriceRange[1] &&
          (state.selectedCategory === 'All' ||
            product.category === state.selectedCategory)
      );
      state.totalPages = Math.ceil(
        state.filteredProducts.length / state.itemsPerPage
      );
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setProducts,
  sortProducts,
  filterByCategory,
  filterByPriceRange,
  setSearchQuery,
  setCurrentPage,
} = productSlice.actions;
export default productSlice.reducer;
