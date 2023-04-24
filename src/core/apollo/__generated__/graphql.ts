/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Creates a new package with it's items and components. */
export type AddAddress = {
  __typename?: 'AddAddress';
  user?: Maybe<User>;
};

/** Creates a new package with it's items and components. */
export type AddBoardKeysToEstateAgent = {
  __typename?: 'AddBoardKeysToEstateAgent';
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type AddCompanyToTransaction = {
  __typename?: 'AddCompanyToTransaction';
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type AddParticipantsToTransaction = {
  __typename?: 'AddParticipantsToTransaction';
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type AddPropertyLeasehold = {
  __typename?: 'AddPropertyLeasehold';
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type AddPropertyPreliminaries = {
  __typename?: 'AddPropertyPreliminaries';
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type AddUserToParticipant = {
  __typename?: 'AddUserToParticipant';
  participantRequest?: Maybe<RequestParticipant>;
  status?: Maybe<Scalars['String']>;
  transaction?: Maybe<Transaction>;
};

/** Represent user for a contact details query. */
export type Address = {
  __typename?: 'Address';
  addressId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
};

/** Represent borrow calc for a graphql query. */
export type BorrowCalc = {
  __typename?: 'BorrowCalc';
  limits?: Maybe<BorrowCalcLimits>;
  text?: Maybe<Scalars['String']>;
};

/** Represent borrow calc for a graphql query. */
export type BorrowCalcLimits = {
  __typename?: 'BorrowCalcLimits';
  lower?: Maybe<Scalars['String']>;
  upper?: Maybe<Scalars['String']>;
};

/** Represent user for a graphql query. */
export type Company = {
  __typename?: 'Company';
  companyId?: Maybe<Scalars['String']>;
  contractRequests?: Maybe<Array<Maybe<CompanyContractRequest>>>;
  estateAgentBoard?: Maybe<Scalars['Boolean']>;
  estateAgentKeys?: Maybe<Scalars['Boolean']>;
  feeDescription?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** Represent link for a graphql query. */
export type CompanyAttributes = {
  __typename?: 'CompanyAttributes';
  brandColour?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  county?: Maybe<Array<Maybe<Object>>>;
  ctaLink?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  privacyPolicyLink?: Maybe<Scalars['String']>;
  review?: Maybe<Scalars['String']>;
  serviceName?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  speciality?: Maybe<Array<Maybe<Object>>>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represent user for a graphql query. */
export type CompanyContractRequest = {
  __typename?: 'CompanyContractRequest';
  contractRequestId?: Maybe<Scalars['String']>;
  signee?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type CompleteVerifyId = {
  __typename?: 'CompleteVerifyId';
  user?: Maybe<User>;
};

/** Represent contact form for a graphql query. */
export type ContactForm = {
  __typename?: 'ContactForm';
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};

/** Represent contract for a graphql query. */
export type Contract = {
  __typename?: 'Contract';
  contractId?: Maybe<Scalars['String']>;
  partner?: Maybe<Partner>;
  text?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type CreateStartVerifyIdLink = {
  __typename?: 'CreateStartVerifyIdLink';
  link?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type CreateTransactionWithProperty = {
  __typename?: 'CreateTransactionWithProperty';
  transaction?: Maybe<Transaction>;
};

/** Creates a new package with it's items and components. */
export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<User>;
};

/** Represent journey for a graphql query. */
export type Journey = {
  __typename?: 'Journey';
  buying?: Maybe<Scalars['Boolean']>;
  journeyId?: Maybe<Scalars['String']>;
  selling?: Maybe<Scalars['Boolean']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

/** Represent link for a graphql query. */
export type Link = {
  __typename?: 'Link';
  link?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represent stage for a graphql query. */
export type LoanToValueCalc = {
  __typename?: 'LoanToValueCalc';
  result?: Maybe<Scalars['String']>;
};

/** Represent stage for a graphql query. */
export type MortgageRepaymentCalc = {
  __typename?: 'MortgageRepaymentCalc';
  result?: Maybe<Scalars['String']>;
};

/** Definition of graphql mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new package with it's items and components. */
  addAddress?: Maybe<AddAddress>;
  /** Creates a new package with it's items and components. */
  addBoardKeysToEstateAgent?: Maybe<AddBoardKeysToEstateAgent>;
  /** Creates a new package with it's items and components. */
  addCompanyToTransaction?: Maybe<AddCompanyToTransaction>;
  /** Creates a new package with it's items and components. */
  addParticipantsToTransaction?: Maybe<AddParticipantsToTransaction>;
  /** Creates a new package with it's items and components. */
  addPropertyLeasehold?: Maybe<AddPropertyLeasehold>;
  /** Creates a new package with it's items and components. */
  addPropertyPreliminaries?: Maybe<AddPropertyPreliminaries>;
  /** Creates a new package with it's items and components. */
  addUserToParticipant?: Maybe<AddUserToParticipant>;
  /** Creates a new package with it's items and components. */
  completeVerifyId?: Maybe<CompleteVerifyId>;
  /** Creates a new package with it's items and components. */
  createStartVerifyIdLink?: Maybe<CreateStartVerifyIdLink>;
  /** Creates a new package with it's items and components. */
  createTransactionWithProperty?: Maybe<CreateTransactionWithProperty>;
  /** Creates a new package with it's items and components. */
  createUser?: Maybe<CreateUser>;
  /** Creates a new package with it's items and components. */
  requestCompany?: Maybe<RequestCompany>;
  /** Creates a new package with it's items and components. */
  signParticipantPartnerContract?: Maybe<SignParticipantPartnerContract>;
  /** Creates a new package with it's items and components. */
  signPrivacyPolicy?: Maybe<SignPrivacyPolicy>;
  /** Creates a new package with it's items and components. */
  submitContactForm?: Maybe<SubmitContactForm>;
  /** Creates a new package with it's items and components. */
  submitQuoteRequest?: Maybe<SubmitQuoteRequest>;
  /** Creates a new package with it's items and components. */
  updateIntentions?: Maybe<UpdateIntentions>;
  /** Creates a new package with it's items and components. */
  updateTransaction?: Maybe<UpdateTransaction>;
  /** Creates a new package with it's items and components. */
  updateUser?: Maybe<UpdateUser>;
  /** Creates a new package with it's items and components. */
  updateUserStage?: Maybe<UpdateUserStage>;
};


/** Definition of graphql mutations. */
export type MutationAddAddressArgs = {
  city: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: InputMaybe<Scalars['String']>;
  postcode: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddBoardKeysToEstateAgentArgs = {
  board?: InputMaybe<Scalars['Boolean']>;
  keys?: InputMaybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddCompanyToTransactionArgs = {
  role: Scalars['String'];
  slug: Scalars['String'];
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddParticipantsToTransactionArgs = {
  participants: Array<InputMaybe<ParticipantInput>>;
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddPropertyLeaseholdArgs = {
  groundRent: Scalars['Float'];
  length: Scalars['Int'];
  managingAgent: Scalars['String'];
  managingAgentContact: Scalars['String'];
  serviceCharge: Scalars['Float'];
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddPropertyPreliminariesArgs = {
  footpathAccessDetails?: InputMaybe<Scalars['String']>;
  isFootpathAccess: Scalars['Boolean'];
  isPotentialIssues: Scalars['Boolean'];
  isSafetyIssues: Scalars['Boolean'];
  isSharedOwnership: Scalars['Boolean'];
  ownershipType: Scalars['String'];
  potentialIssuesDetails?: InputMaybe<Scalars['String']>;
  safetyIssuesDetails?: InputMaybe<Scalars['String']>;
  sharedOwnershipDetails?: InputMaybe<Scalars['String']>;
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationAddUserToParticipantArgs = {
  requestId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationCompleteVerifyIdArgs = {
  requestVerifyId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationCreateTransactionWithPropertyArgs = {
  city: Scalars['String'];
  lineOne: Scalars['String'];
  lineTwo?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<Array<InputMaybe<ParticipantInput>>>;
  postcode: Scalars['String'];
  transactionType: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationRequestCompanyArgs = {
  email?: InputMaybe<Scalars['String']>;
  externalRef?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationSignParticipantPartnerContractArgs = {
  contractId: Scalars['String'];
  text: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationSignPrivacyPolicyArgs = {
  partner: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationSubmitContactFormArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  recaptcha?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationSubmitQuoteRequestArgs = {
  company: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  recaptcha?: InputMaybe<Scalars['String']>;
};


/** Definition of graphql mutations. */
export type MutationUpdateIntentionsArgs = {
  buying?: InputMaybe<Scalars['Boolean']>;
  selling?: InputMaybe<Scalars['Boolean']>;
};


/** Definition of graphql mutations. */
export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
  transactionId: Scalars['String'];
};


/** Definition of graphql mutations. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** Definition of graphql mutations. */
export type MutationUpdateUserStageArgs = {
  completed?: InputMaybe<Scalars['Boolean']>;
  stage?: InputMaybe<Scalars['String']>;
};

/** . */
export type Object = {
  __typename?: 'Object';
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** Represent Participant for a graphql query. */
export type Participant = {
  __typename?: 'Participant';
  currentUser?: Maybe<Scalars['Boolean']>;
  participantId?: Maybe<Scalars['String']>;
  requests?: Maybe<Array<Maybe<ParticipantRequestParticipant>>>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<ParticipantUser>;
  verified?: Maybe<Scalars['Boolean']>;
};

/** Defines required fields for updating an item. */
export type ParticipantInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

/** Represent RequestParticipant for a graphql query. */
export type ParticipantRequestParticipant = {
  __typename?: 'ParticipantRequestParticipant';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  requestParticipantId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

/** Represent user for a graphql query. */
export type ParticipantUser = {
  __typename?: 'ParticipantUser';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
};

/** Represent property for a graphql query. */
export type Partner = {
  __typename?: 'Partner';
  contractNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Template>>>;
};

/** Represent property for a graphql query. */
export type Property = {
  __typename?: 'Property';
  city?: Maybe<Scalars['String']>;
  lineOne?: Maybe<Scalars['String']>;
  lineTwo?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  propertyId?: Maybe<Scalars['String']>;
};

/** Query object for GraphQL API. */
export type Query = {
  __typename?: 'Query';
  borrowCalc?: Maybe<BorrowCalc>;
  contract?: Maybe<Contract>;
  getCompanies?: Maybe<Array<Maybe<CompanyAttributes>>>;
  getCompany?: Maybe<CompanyAttributes>;
  getNextTask?: Maybe<Task>;
  getParticipants?: Maybe<Array<Maybe<Participant>>>;
  getProperties?: Maybe<Transactions>;
  getTasks?: Maybe<Tasks>;
  getTeam?: Maybe<TeamCompanies>;
  getTransaction?: Maybe<Transaction>;
  getTransactionByRequestParticipant?: Maybe<TransactionRequest>;
  getTransactions?: Maybe<Array<Maybe<Transaction>>>;
  loanToValueCalc?: Maybe<LoanToValueCalc>;
  mortgageRepaymentCalc?: Maybe<MortgageRepaymentCalc>;
  stage?: Maybe<Stage>;
  stampDutyCalc?: Maybe<StampDutyCalc>;
  status?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


/** Query object for GraphQL API. */
export type QueryBorrowCalcArgs = {
  income1: Scalars['Int'];
  income2?: InputMaybe<Scalars['Int']>;
};


/** Query object for GraphQL API. */
export type QueryContractArgs = {
  contractId: Scalars['String'];
};


/** Query object for GraphQL API. */
export type QueryGetCompaniesArgs = {
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Query object for GraphQL API. */
export type QueryGetCompanyArgs = {
  slug: Scalars['String'];
};


/** Query object for GraphQL API. */
export type QueryGetNextTaskArgs = {
  currentTask?: InputMaybe<Scalars['String']>;
  flow?: InputMaybe<Scalars['String']>;
};


/** Query object for GraphQL API. */
export type QueryGetTransactionArgs = {
  transactionId: Scalars['String'];
};


/** Query object for GraphQL API. */
export type QueryGetTransactionByRequestParticipantArgs = {
  requestId: Scalars['String'];
};


/** Query object for GraphQL API. */
export type QueryLoanToValueCalcArgs = {
  depositValue: Scalars['Int'];
  purchasePrice: Scalars['Int'];
};


/** Query object for GraphQL API. */
export type QueryMortgageRepaymentCalcArgs = {
  amount: Scalars['Int'];
  interest: Scalars['Float'];
  years: Scalars['Int'];
};


/** Query object for GraphQL API. */
export type QueryStageArgs = {
  slug: Scalars['String'];
};


/** Query object for GraphQL API. */
export type QueryStampDutyCalcArgs = {
  firstTime?: InputMaybe<Scalars['Boolean']>;
  value: Scalars['Int'];
};

/** Represent contact form for a graphql query. */
export type QuoteRequest = {
  __typename?: 'QuoteRequest';
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type RequestCompany = {
  __typename?: 'RequestCompany';
  result?: Maybe<Scalars['String']>;
};

/** Represent RequestParticipant for a graphql query. */
export type RequestParticipant = {
  __typename?: 'RequestParticipant';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  participant?: Maybe<Participant>;
  requestParticipantId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type SignParticipantPartnerContract = {
  __typename?: 'SignParticipantPartnerContract';
  user?: Maybe<User>;
};

/** Creates a new package with it's items and components. */
export type SignPrivacyPolicy = {
  __typename?: 'SignPrivacyPolicy';
  user?: Maybe<User>;
};

/** Represent stage for a graphql query. */
export type Stage = {
  __typename?: 'Stage';
  completed?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<Link>>>;
  sequence?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Represent stage for a graphql query. */
export type StampDutyCalc = {
  __typename?: 'StampDutyCalc';
  result?: Maybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type SubmitContactForm = {
  __typename?: 'SubmitContactForm';
  contactForm?: Maybe<ContactForm>;
};

/** Creates a new package with it's items and components. */
export type SubmitQuoteRequest = {
  __typename?: 'SubmitQuoteRequest';
  quoteRequest?: Maybe<QuoteRequest>;
};

/** Represent user for a graphql query. */
export type Task = {
  __typename?: 'Task';
  link?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represent articles for a graphql query. */
export type Tasks = {
  __typename?: 'Tasks';
  tasks?: Maybe<Array<Maybe<Task>>>;
};

/** Represent articles for a graphql query. */
export type TeamCompanies = {
  __typename?: 'TeamCompanies';
  members?: Maybe<Array<Maybe<TeamCompany>>>;
};

/** Represent user for a graphql query. */
export type TeamCompany = {
  __typename?: 'TeamCompany';
  attributes?: Maybe<CompanyAttributes>;
  company?: Maybe<Company>;
  property?: Maybe<Property>;
};

/** Represent contract for a graphql query. */
export type Template = {
  __typename?: 'Template';
  contractTemplateId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represent transaction for a graphql query. */
export type Transaction = {
  __typename?: 'Transaction';
  companies?: Maybe<Array<Maybe<Company>>>;
  flow?: Maybe<Scalars['String']>;
  originator?: Maybe<Scalars['String']>;
  participants?: Maybe<Array<Maybe<Participant>>>;
  property?: Maybe<Property>;
  transactionId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** Represent transaction for a graphql query. */
export type TransactionRequest = {
  __typename?: 'TransactionRequest';
  flow?: Maybe<Scalars['String']>;
  originator?: Maybe<CompanyAttributes>;
  request?: Maybe<RequestParticipant>;
  transaction?: Maybe<Transaction>;
};

/** Represent articles for a graphql query. */
export type Transactions = {
  __typename?: 'Transactions';
  totalPurchaseProperties?: Maybe<Scalars['Int']>;
  totalSaleProperties?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

/** Creates a new package with it's items and components. */
export type UpdateIntentions = {
  __typename?: 'UpdateIntentions';
  user?: Maybe<User>;
};

/** Defines required fields for updating an item. */
export type UpdatePropertyInput = {
  city?: InputMaybe<Scalars['String']>;
  lineOne?: InputMaybe<Scalars['String']>;
  lineTwo?: InputMaybe<Scalars['String']>;
  postcode?: InputMaybe<Scalars['String']>;
};

/** Creates a new package with it's items and components. */
export type UpdateTransaction = {
  __typename?: 'UpdateTransaction';
  transaction?: Maybe<Transaction>;
};

/** . */
export type UpdateTransactionInput = {
  participants?: InputMaybe<Array<InputMaybe<ParticipantInput>>>;
  property?: InputMaybe<UpdatePropertyInput>;
};

/** Creates a new package with it's items and components. */
export type UpdateUser = {
  __typename?: 'UpdateUser';
  user?: Maybe<User>;
};

/** . */
export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  property?: InputMaybe<UpdatePropertyInput>;
};

/** Creates a new package with it's items and components. */
export type UpdateUserStage = {
  __typename?: 'UpdateUserStage';
  user?: Maybe<User>;
};

/** Represent user for a graphql query. */
export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  journeys?: Maybe<Array<Maybe<Journey>>>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  prettyName?: Maybe<Scalars['String']>;
  progress?: Maybe<Scalars['String']>;
  publicId?: Maybe<Scalars['String']>;
  signedContracts?: Maybe<Array<Maybe<Contract>>>;
  stages?: Maybe<Array<Maybe<Stage>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  userId?: Maybe<Scalars['String']>;
};

export type CalculateLoanToValueQueryVariables = Exact<{
  depositValue: Scalars['Int'];
  purchasePrice: Scalars['Int'];
}>;


export type CalculateLoanToValueQuery = { __typename?: 'Query', loanToValueCalc?: { __typename?: 'LoanToValueCalc', result?: string | null } | null };


export const CalculateLoanToValueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CalculateLoanToValue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"depositValue"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"purchasePrice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loanToValueCalc"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depositValue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"depositValue"}}},{"kind":"Argument","name":{"kind":"Name","value":"purchasePrice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"purchasePrice"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]} as unknown as DocumentNode<CalculateLoanToValueQuery, CalculateLoanToValueQueryVariables>;