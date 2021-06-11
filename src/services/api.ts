import { Stack } from '../config/config'

const getData = async (contentTypeUid: string, lang: string) => {

    return await Stack.ContentType(contentTypeUid)
        .Query()
        .language(lang)
        .includeContentType()
        .includeCount()
        .toJSON()
        .find()
        .then(
          (res) => {
            if (res) {
              return res[0]
            } else {
              return "Internal Error";
            }
          },
          (err) => {
            return err;
          }
        );

  }

  const API = {
    getData
  }

  export default API