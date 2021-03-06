import { errorMsgResponse } from "../utils";

const errorMsgs: { [key: string]: string } = {
  OPENMRS_ONE_FULLY_SPECIFIED_NAME_PER_LOCALE:
    "A concept may not have more than one fully specified name in any locale",
  OPENMRS_NO_MORE_THAN_ONE_SHORT_NAME_PER_LOCALE:
    "A concept cannot have more than one short name in a locale",
  OPENMRS_NAMES_EXCEPT_SHORT_MUST_BE_UNIQUE:
    "All names except short names must be unique for a concept and locale",
  OPENMRS_FULLY_SPECIFIED_NAME_UNIQUE_PER_SOURCE_LOCALE:
    "Concept fully specified name must be unique for same source and locale",
  OPENMRS_MUST_HAVE_EXACTLY_ONE_PREFERRED_NAME:
    "A concept may not have more than one preferred name (per locale)",
  OPENMRS_SHORT_NAME_CANNOT_BE_PREFERRED:
    "A short name cannot be marked as locale preferred",
  OPENMRS_AT_LEAST_ONE_FULLY_SPECIFIED_NAME:
    "A concept must have at least one fully specified name",
  OPENMRS_PREFERRED_NAME_UNIQUE_PER_SOURCE_LOCALE:
    "Concept preferred name must be unique for same source and locale"
};

describe("errorResponseMsg", () => {
  for (let error in errorMsgs) {
    const response = {
      data: {
        name: [errorMsgs[error]]
      }
    };
    it(`should return appropriate error msg for ${error} scenario `, () => {
      expect(errorMsgResponse(response)).toEqual(errorMsgs[error]);
    });
  }

  it("should return generics error msg if no error response from server", () => {
    const response = {};
    expect(errorMsgResponse(response)).toEqual(
      "Action could not be completed. Please retry."
    );
  });
});
