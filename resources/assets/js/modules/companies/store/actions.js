import * as types from './action-types';

export const fetchingCompany = () => ({
  type: types.FETCHING_SINGLE_COMPANY
})

export const fetchingCompanySuccess = (payload) => ({
  type: types.FETCHING_SINGLE_COMPANY_SUCCESS,
  data: payload
})

export const fetchingCompanyFailure = () => ({
  type: types.FETCHING_SINGLE_COMPANY_FAILURE
})

export const fetchingCompanies = () => ({
  type: types.FETCHING_COMPANIES
})

export const fetchingCompaniesSuccess = (payload) => ({
  type: types.FETCHING_COMPANIES_SUCCESS,
  data: payload
})

export const fetchingCompaniesFailure = () => ({
  type: types.FETCHING_COMPANIES_FAILURE
})

export const postingCompany = () => ({
  type: types.POSTING_COMPANY
})

export const postingCompanySuccess = (payload) => ({
  type: types.POSTING_COMPANY_SUCCESS,
  data: payload
})

export const postingCompanyFailure = () => ({
  type: types.POSTING_COMPANY_FAILURE
})

export const deletingCompany = () => ({
  type: types.DELETING_COMPANY
})

export const deletingCompanySuccess = (payload) => ({
  type: types.DELETING_COMPANY_SUCCESS,
  data: payload
})

export const deletingCompanyFailure = () => ({
  type: types.DELETING_COMPANY_FAILURE
})
export const fetchingCustomFieldsForCompanies = () => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_COMPANIES
})

export const fetchingCustomFieldsForCompaniesSuccess = (payload) => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_COMPANIES_SUCCESS,
  data: payload
})

export const fetchingCustomFieldsForCompaniesFailure = () => ({
  type: types.FETCHING_CUSTOM_FIELDS_FOR_COMPANIES_FAILURE
})

export const editingCompany = () => ({
  type: types.EDITING_COMPANY
})

export const editingCompanyFinished = () => ({
  type: types.EDITING_COMPANY_FINISHED
})