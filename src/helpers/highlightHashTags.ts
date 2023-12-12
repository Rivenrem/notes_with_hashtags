import parse from "html-react-parser";

const highlightHashtags = function (str: string) {
  str = str.replace(/\n/g, "<br>");

  if (
    !str.match(
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([a-zA-Z0-9]+)/g
    ) &&
    !str.match(
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?#([\u0600-\u06FF]+)/g
    )
  ) {
    if (
      !str.match(
        /#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))#/g
      )
    ) {
      str = str.replace(
        /#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,
        "<span class='hashTag'>#$1</span>"
      );
    } else {
      str = str.replace(
        /#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))#(([_a-zA-Z0-9]+)|([\u0600-\u06FF]+)|([ㄱ-ㅎㅏ-ㅣ가-힣]+)|([ぁ-んァ-ン]+)|([一-龯]+))/g,
        "<span class='hashTag'>#$1</span>"
      );
    }
  }

  return str;
};

const Hashtags = (props: any) => {
  return props.hasOwnProperty("text")
    ? parse(highlightHashtags(props.text))
    : parse(highlightHashtags(props.children));
};

export default Hashtags;
