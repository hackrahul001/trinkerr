const RSP_CODE = {
  server_error: 500,
  success: 200,
  client_error: 400,
  token_missing: 401,
}

const RSP_MSG = {
  // Error message
  server_error: 'Internal server error',
  client_error: 'Invalid request received',
  token_missing: 'Invalid token received',

  // Success
  success: 'Success',

  // Designation
  designation: {
    create_success: 'Designation created successfully',
    create_failed: 'Create designation operation failed',
    list: 'Success',
    update: 'Designation updated successfully',
    delete: 'Designation deleted successfully',
    not_found: 'Requested designation not found'
  },

  // Company
  company: {
    create_success: 'Company created successfully',
    create_failed: 'Create company operation failed',
    list: 'Success',
    update: 'Company updated successfully',
    delete_success: 'Company deleted successfully',
    not_found: 'Requested company not found'
  },

  // Expertise
  expertise: {
    create_success: 'Expertise created successfully',
    create_failed: 'Create expertise operation failed',
    list: 'Success',
    update: 'Expertise updated successfully',
    delete_success: 'Expertise deleted successfully',
    not_found: 'Requested expertise not found'
  },

  // Industry
  industry: {
    create_success: 'Industry created successfully',
    create_failed: 'Create industry operation failed',
    list: 'Success',
    update: 'Industry updated successfully',
    delete_success: 'Industry deleted successfully',
    not_found: 'Requested industry not found',
    add_subIndustry_success: 'SubIndustry added successfully',
    add_subIndustry_failed: 'Add subIndustry operation failed',
    remove_subIndustry_success: 'SubIndustry removed successfully',
    remove_subIndustry_failed: 'Remove subIndustry operation failed',
  },

  // SubIndustry
  subIndustry: {
    create_success: 'SubIndustry created successfully',
    create_failed: 'Create subIndustry operation failed',
    list: 'Success',
    update: 'SubIndustry updated successfully',
    delete_success: 'SubIndustry deleted successfully',
    not_found: 'Requested subIndustry not found'
  },

  //article
  article: {
    create_success: 'Article created successfully',
    create_failed: 'Create article operation failed',
    list: 'Success',
  },

  // Poll
  poll: {
    create_success: 'Poll created successfully',
    create_failed: 'Create poll operation failed',
    list: 'Success',
    update: 'Poll updated successfully',
    delete_success: 'Poll deleted successfully',
    not_found: 'Requested poll not found',
    cast_vote_success: 'Vote added successfully',
    cast_vote_failed: 'Add vote operation failed'
  },

  // Club
  club: {
    create_success: 'Club created successfully',
    create_failed: 'Create club operation failed',
    list: 'Success',
    update: 'Club updated successfully',
    delete_success: 'Club deleted successfully',
    not_found: 'Requested club not found',
    join_member_success: 'Member added successfully',
    join_member_failed: 'Add member operation failed',
    invalid_user: 'Invalid user requested'
  },

  // countryCode
  countryCode: {
    create_success: 'Country code created successfully',
    create_failed: 'Create country code operation failed',
    list: 'Success',
    update: 'Country code updated successfully',
    delete_success: 'Country code deleted successfully',
    not_found: 'Requested country code not found'
  },

  // Functions
  functions: {
    create_success: 'Function created successfully',
    create_failed: 'Create function operation failed',
    list: 'Success',
    update: 'Functions updated successfully',
    delete_success: 'Functions deleted successfully',
    not_found: 'Requested function not found'
  },

  //
  connection: {
    invalid_user: 'Invalid user',
    invalid_params: 'Invalid parameter received',
    request_already_sent: 'Request already sent'
  }
}

module.exports = { RSP_MSG, RSP_CODE }