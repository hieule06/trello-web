//ItemCard
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import CommentIcon from "@mui/icons-material/Comment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

export default function ItemCard({ firstCard }) {
    return (
        <Card
            sx={{
                cursor: "pointer",
                marginBlock: "10px",
            }}
        >
            {firstCard ? (
                <CardContent
                    sx={{
                        "&:last-child": { p: 0 },
                    }}
                >
                    <CardMedia
                        component="img"
                        height="194"
                        image="/src/assets/images/paella.jpg"
                        alt="Paella dish"
                        sx={{
                            borderTopRightRadius: "4px",
                            borderTopLeftRadius: "4px",
                        }}
                    />
                    <Typography
                        paragraph
                        sx={{
                            padding: "10px 10px 0 10px",
                            margin: 0,
                        }}
                    >
                        Heat 1/2 cup of the broth in a pot until
                    </Typography>
                    <CardActions sx={{ padding: "8px 0" }}>
                        <Button
                            size="small"
                            startIcon={<PeopleIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            20
                        </Button>
                        <Button
                            size="small"
                            startIcon={<CommentIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            15
                        </Button>
                        <Button
                            size="small"
                            startIcon={<InsertLinkIcon />}
                            sx={{ color: "#0586fa" }}
                        >
                            10
                        </Button>
                    </CardActions>
                </CardContent>
            ) : (
                <CardContent
                    sx={{
                        boxShadow: "1px 1px rgba(0, 0, 0, 0.2)",
                        "&:last-child": { p: 1.5 },
                    }}
                >
                    <Typography paragraph sx={{ margin: 0 }}>
                        Card 01
                    </Typography>
                </CardContent>
            )}
        </Card>
    );
}
