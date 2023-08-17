import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router";
import { useCourseContext } from "../../contexts/CourseContext";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Review() {
  const { getOneCourse, oneCourse } = useCourseContext();
  const { user } = useAuthContext();
  const { id } = useParams();

  React.useEffect(() => {
    getOneCourse(id);
    if (!oneCourse || !user) {
      return "";
    }
    document.body.classList.add("addLessonPage");
    return () => {
      document.body.classList.remove("addLessonPage");
    };
  }, []);

  const products = [
    {
      name: oneCourse.title,
      desc: oneCourse.subject,
      price: `$${oneCourse.price}`,
    },
  ];

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Your Balance", detail: "$" + user.balance },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "white",
          background: "transparent",
        }}
      >
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem
            key={product.name}
            sx={{ py: 1, px: 0, color: "white", background: "transparent" }}
          >
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, color: "white" }}>
            Shoper
          </Typography>
          <Typography gutterBottom sx={{ color: "white" }}>
            {user.first_name}
          </Typography>
          <Typography gutterBottom sx={{ color: "white" }}>
            {user.last_name}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2, color: "white" }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ color: "white" }}>
                    {payment.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom sx={{ color: "white" }}>
                    {payment.detail}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
