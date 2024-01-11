using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace domain.e_market.Extensions;

public static class Utilities
{
    public static string ToJson(this object obj)
        => JsonConvert.SerializeObject(obj, Formatting.Indented);

    public static JObject ToJson(this string json)
        => JObject.Parse(json);

    public static bool ToBool(this string? strBool)
        => Convert.ToBoolean(strBool);

    public static string GetErrorMessage(this JObject json)
        => json["error"]["message"].ToString();
}